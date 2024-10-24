const Blog = require('../model/blog');
const express = require("express");  // Import your Blog model
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

// Route to create a new blog (Admin only)
router.post('/admin/blogs', authMiddleware, async (req, res) => {
    const { title, content } = req.body;

    try {
        const blog = await Blog.create({
            title,
            content,
            adminId: req.admin.id  // Assuming `adminId` is a foreign key in the Blog model
        });
        res.status(201).json(blog);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

// Route to update a blog (Admin only)
router.put('/admin/blogs/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const blog = await Blog.findByPk(id);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        blog.title = title;
        blog.content = content;

        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ error: 'Failed to update blog' });
    }
});

// Route to delete a blog (Admin only)
router.delete('/admin/blogs/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findByPk(id);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        await blog.destroy();
        res.status(204).json();  // Success, no content to return
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});

// Route to get all blogs (Public route)
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});
