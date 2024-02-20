const TestCase=require('../Model/TestCase');

const createTestController=async(req,res)=>{
    try {
        const testCase=req.body;
        const insertedTestCases = await TestCase.insertMany(testCase);
        return res.status(200).send({insertedTestCases});

    } catch (error) {
        console.log(error);
        return res.status(401).send({error});
    }
}

const getAllTest=async(req,res)=>{
    try {
        const AllTest=await TestCase.find();
        return res.status(200).send(AllTest)
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    createTestController,
    getAllTest
}