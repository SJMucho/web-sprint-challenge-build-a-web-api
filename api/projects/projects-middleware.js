// add middlewares here related to projects
const checkProjectId = async (req,res,next)=>{
  try{
    const {id} = req.params
    const project = await Projects.findById(id)
    if(!project){
      res.status(404).json({message: `No project: ${id}`})
    }else{
      req.project = project
      next()
    }
  }
  catch(err){
    res.status(500).json({message:`Error: ${err.message}`})
  }  
}

module.exports = checkProjectId;