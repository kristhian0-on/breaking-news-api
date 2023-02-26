import News from '../models/News.js';

export const createService = (body) => News.create(body);
export const findAllService = (limit, offset) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate('user');
export const countNews = () => News.countDocuments();
export const topNewsService = () => News.findOne().sort({_id: -1}).populate('user');
export const findByIdService = (id) => News.findById(id).populate('user');
export const searchByTitleService = (title) => News.find({
    title: {$regex: `${title || ""}`, $options: "i"},
}).sort({ _id: -1 }).populate('user');

export const byUserService = (id) => News.find({ user: id }).sort({ _id: -1 }).populate('user');

export const updateService = (id, title, text, banner) => News.findOneAndUpdate({ _id: id }, { title, text, banner }, { rawResult: true });

export const eraseService = (id) => News.findOneAndDelete({ _id: id });

