import fs from 'fs';

//home function
export const home = async (req,res) => {
    try{
        const file = fs.readFileSync('./data/info.json','utf-8');
        const skillsData = fs.readFileSync('./data/skills.json','utf-8');
        const projectData = fs.readFileSync('./data/projects.json','utf-8');
        const platforms = JSON.parse(fs.readFileSync('./data/platforms.json','utf-8'));
        res.status(200).send({
            home:JSON.parse(file),
            platforms,
            skills:JSON.parse(skillsData),
            projects:JSON.parse(projectData)
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
}

//about function
export const about = async (req,res) => {
    try{
        const file = JSON.parse(fs.readFileSync('./data/about.json','utf-8'));
        const platforms = JSON.parse(fs.readFileSync('./data/platforms.json','utf-8'));
        res.status(200).send({
            file,
            platforms
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"})
    }
}

//projects function
export const projects = async (req,res) => {
    try{
        const file = fs.readFileSync('./data/projects.json','utf-8');
        const jsonData = JSON.parse(file);
        res.status(200).send(file);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"})
    }
}

//skills function
export const skills = async (req,res) => {
    try{
        const file = await fs.promises.open('./data/skills.json','r');
        const data = await file.readFile(file);
        res.status(200).send(data);
        file.close();
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"})
    }
}