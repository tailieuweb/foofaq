const { Controller } = require("../orm/database");
const Tag = require("../models/tag");
const controllers = new Controller("mongo");

//Create Tag
const createTag = (req, res) => {
    console.log(req.body)
    const newTag = new Tag(req.body);
	controllers.save(Tag, newTag);
	return res.status(201).json({
		newTag
	});
}
//Get all Tag
const getAllTags = async (req, res) => {
    const tag = await controllers.find(Tag);
	return res.status(200).json({
		tag
	});
}

//Edit tag
const editTag = async (req, res) => {
    try{
        const tag = await Tag.findByIdAndUpdate(req.params.id, {
            tagName: req.body.tagName,
            tagDescription: req.body.tagDescription,
        })
        if(!tag) throw new Error("Tag not found");
        {
            return res.status(200).json({success: true});
        }
    }catch(e){
        return res.status(400).json({ msg: err })
    }
}
// Delete tag
const deleleTag = async (req, res) => {
    try { 
        const tag = await Tag.findByIdAndDelete(req.params.id);
        if(!tag) throw Error("Tag not found");
        {
            res.status(200).json({success: true});
        }
    }catch(err) { res.status(400).json({ msg: err})}
}
//Get detail tag
const detailTag = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        if (!tag) throw Error("Tag not found");
        {
          res.status(200).json(tag);
        }
      } catch (err) {
        res.status(400).json({ msg: err });
      }
}

module.exports = {
    createTag, 
    getAllTags,
    editTag,
    deleleTag,
    detailTag,
}