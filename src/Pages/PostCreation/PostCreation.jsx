import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
} from '@chakra-ui/react';

function PostCreationPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTagAdd = (event) => {
    if (event.key === 'Enter') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Box bg="#111c44" maxW="md" mx="auto" my={8} borderWidth="20px" borderRadius="lg" overflow="hidden">
      <Box p={8}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={8}>
            <FormLabel fontWeight="bold" fontSize="lg" color="white">Post Title</FormLabel>
            <Input type="text" value={title} color="white" onChange={handleTitleChange} />
          </FormControl>
          <FormControl mb={8}>
            <FormLabel fontWeight="bold" fontSize="lg" color="white">Post Content</FormLabel>
            <Textarea value={content} color="white" onChange={handleContentChange} />
          </FormControl>
          <FormControl mb={8}>
            <FormLabel fontWeight="bold" fontSize="lg" color="white">Category</FormLabel>
            <Select color="Blue" value={category} onChange={handleCategoryChange}>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="politics">Politics</option>
              <option value="food">Food</option>
              <option value="economics">Economics</option>
              <option value="sports">Sports</option>
            </Select>
          </FormControl>
          <FormControl mb={8}>
            <FormLabel fontWeight="bold" fontSize="lg" color="white">Tags</FormLabel>
            <Input color="white" type="text" placeholder="Add tags" onKeyDown={handleTagAdd} />
            <Flex mt={2} flexWrap="wrap">
              {tags.map((tag) => (
                <Tag key={tag} variant="subtle" colorScheme="blue" mr={2} mb={2}>
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleTagRemove(tag)} />
                </Tag>
              ))}
            </Flex>
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Create Post
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default PostCreationPage;
