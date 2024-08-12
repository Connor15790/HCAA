const router = require('express').Router();
const casuality = require('../models/Casualities')
const InjuryDetails = require('../models/InjuryDetails')
const { PythonShell } = require("python-shell")
const spawner = require("child_process").spawn;

router.route('/patientDetails')
    .post(async (req, res) => {
        // console.log(req.body, "hit")
        try {
            const {
                primarySynopsis,
                patientName,
                gender,
                age,
                bloodGroup,
                timeOfAccident,
                siteOfInjury,
                symptoms,
                allergies,
                previousMedications,
            } = req.body;

            const newInjuryDetails = new InjuryDetails({
                timeOfAccident,
                siteOfInjury,
                symptoms,
                allergies,
                previousMedications,
                dateOfCreation: new Date(),
            });

            await newInjuryDetails.save();

            const newCasuality = new casuality({
                primarySynopsis,
                patientName,
                gender,
                age,
                bloodGroup,
                injuryDetails: newInjuryDetails._id,
                // injuryDetails: {
                //     timeOfAccident,
                //     // siteOfInjury,
                //     symptoms,
                //     allergies,
                //     previousMedications,
                // },
            });

            // Save the document to the database
            await newCasuality.save();

            res.status(200).json({ status: 200, message: 'Data inserted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 400, message: 'Internal server error' });
        }
    })

router.route('/getPatient')
    .get(async (req, res) => {
        const casualityData = (await casuality.find().populate('injuryDetails')).reverse();

        if (!casualityData) {
            res.json({ status: 404, message: 'No data found' });
        } else {
            res.json({ status: 200, message: 'Data fetched successfully', data: casualityData });
        }
    })

router.route('/togglePatientCheck')
    .post(async (req, res) => {
        try {
            const { patientId } = req.body;
            // console.log(patientId)
            // Assuming patientId is provided in the request body
            if (!patientId) {
                return res.json({ status: 401, message: 'Patient ID is required' });
            }

            // Find the casuality by ID and populate the injuryDetails field
            const CasualityFound = await casuality.findById(patientId).populate('injuryDetails');

            if (!casuality) {
                return res.json({ error: 'Patient not found' });
            }

            // Toggle the checked field
            CasualityFound.checked = !CasualityFound.checked;

            // Save the updated document to the database
            await CasualityFound.save();

            res.json({ status: 200, message: 'Patient checked status updated successfully', data: CasualityFound });
        } catch (error) {
            console.error('Error updating patient checked status:', error);
            res.json({ status: 500, message: 'Internal server error' });
        }
    })

router.route('/deletePatient')
    .post(async (req, res) => {
        try {
            const { patientId } = req.body;
            console.log(patientId)

            // Assuming patientId is provided in the request body
            if (!patientId) {
                return res.json({ status: 401, message: 'Patient ID is required' });
            }

            // Find the casuality by ID and populate the injuryDetails field
            const CasualityFound = await casuality.findById(patientId).populate('injuryDetails');

            if (!casuality) {
                return res.json({ error: 'Patient not found' });
            }
            // Remove the related injuryDetail
            if (CasualityFound.injuryDetails) {
                await InjuryDetails.findByIdAndDelete(CasualityFound.injuryDetails._id);
            }

            // Remove the casuality
            await casuality.findByIdAndDelete(patientId);

            res.json({ status: 200, message: 'Patient and related details deleted successfully' });
        } catch (error) {
            console.error('Error deleting patient:', error);
            res.json({ status: 500, message: 'Internal server error' });
        }
    })

router.route('/predictdisease')

    .post(async (req, res) => {

        const inputString = "stomach_pain acidity ulcers_on_tongue vomiting cough chest_pain";
        console.log(req.body)

        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: req.body.join(" ")
        };

        PythonShell.run('main.py', options).then(result => {
            console.log(result)
            res.send(result)

        }).catch(err => {
            // console.log("Error occured")
            res.send(err);
        })
    });

router.route('/editPatientDetails')
.post(async(req,res)=>{
    try {
        const { patientId, primarySynopsis, patientName } = req.body;       

        const updatedCasuality = await casuality.findByIdAndUpdate
        (patientId, { primarySynopsis, patientName }, { new: true });

        res.json({ status: 200, message: 'Casuality details updated successfully', data: updatedCasuality });
    } catch (error) {
        console.error('Error updating casuality details:', error);
        res.json({ status: 500, message: 'Internal server error' });
    }
})

router.route('/predictmeds')
    .post(async (req, res) => {

        const inputString = [];

        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: req.body.join(" ")
        };


        PythonShell.run('main2.py', options).then(result => {
            // console.log(result)
            res.send(result)

        }).catch(err => {
            console.log("Error occured")
            res.send(err);
        })
    });

module.exports = router