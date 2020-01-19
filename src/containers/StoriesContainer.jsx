import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hnApi';
import Story from '../components/Story';
import { StoriesContainerWrapper } from '../styles/StoryStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds()
      .then(data => data && setStoryIds(data));
  }, [])

  return (
    <StoriesContainerWrapper>
      <h1>Hacker News Stories</h1>
      {storyIds.slice(0, count).map(storyId => storyId && <Story key={storyId} storyId={storyId} />)}
    </StoriesContainerWrapper>
  )
}

export default StoriesContainer;
