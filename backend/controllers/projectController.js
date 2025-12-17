import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  const { title, description, service, clientId } = req.body;

  const project = await Project.create({
    title,
    description,
    service,
    client: clientId
  });

  res.status(201).json(project);
};

export const getProjects = async (req, res) => {
  const projects =
    req.user.role === "admin"
      ? await Project.find().populate("client", "name email")
      : await Project.find({ client: req.user._id });

  res.json(projects);
};

export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(project);
};
