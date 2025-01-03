import fs from 'fs';
const header = JSON.parse(fs.readFileSync('./data/info.json','utf-8'));
const aboutData = JSON.parse(fs.readFileSync('./data/about.json','utf-8'));
const skillsData = JSON.parse(fs.readFileSync('./data/skills.json','utf-8'));
const projectData = JSON.parse(fs.readFileSync('./data/projects.json','utf-8'));
const platforms = JSON.parse(fs.readFileSync('./data/platforms.json','utf-8'));

//home function
export const home = async (req,res) => {
    try{
        const filterData = projectData.slice(0,3);
        return res.status(200).send({
            header,
            aboutData,
            platforms,
            skillsData,
            filterData
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"internal server error"});
    }
}

//about function
export const about = async (req,res) => {
    try{
        return res.status(200).send({
            aboutData,
            platforms
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"internal server error"})
    }
}

//projects function
export const projects = async (req,res) => {
    try{
        return res.status(200).send(projectData);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"internal server error"})
    }
}

//skills function
export const skills = async (req,res) => {
    try{
        return res.status(200).send(skillsData);
        file.close();
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"internal server error"})
    }
}

//wrong route
export const wrongRoute = async (req,res) =>{
    return res.status(404).send(`/${req.params[0]} route not found`)
}