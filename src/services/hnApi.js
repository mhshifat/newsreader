import axios from "axios";
import { selectFields } from "../selectors/selectFields";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    const { data } = await axios.get(newStoriesUrl);
    return data;
}

export const getStory = async storyId => {
    const { data } = await axios.get(`${storyUrl + storyId}.json`);
    return selectFields(data);
}