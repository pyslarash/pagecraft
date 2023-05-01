import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function StepOne(props) {
    const [requiredFieldsSelected, setRequiredFieldsSelected] = useState(false);
    const [job, setJob] = useState('');

    const jobType = [
        'Write an Article',
        'Write an Essay',
        'Write a Book',
        'Write a Script',
        'Write Social Media Posts',
        'Write a Product Description'
    ];

    const handleJobChange = (event) => {
        const job = event.target.value;
        setJob(job);

        if (job === 'Write an Article' || job === 'Write an Essay' || job === 'Write a Book' || job === 'Write a Script' || job === 'Write Social Media Posts' || job === 'Write a Product Description') {
            setRequiredFieldsSelected(false);
        } else {
            setRequiredFieldsSelected(true);
        }
    };

    const [article, setArticle] = useState('');

    const articleType = [
        'Newspaper/Magazine',
        'Blog/SEO-Friendly',
        'LinkedIn Article'
    ]; // LinkedIn Article is up to 125,000 characters

    const handleArticleChange = (event) => {
        const article = event.target.value;
        setArticle(article);
        setRequiredFieldsSelected(true);
    };

    const [essay, setEssay] = useState('');

    const essayType = [
        'Argumentative',
        'Expository',
        'Narrative',
        'Descriptive'
    ];

    const handleEssayChange = (event) => {
        const essay = event.target.value;
        setEssay(essay);
        setRequiredFieldsSelected(true);
    };

    const [book, setBook] = useState('');

    const bookType = [
        'Fiction',
        'Non-Fiction'
    ];

    const handleBookChange = (event) => {
        const book = event.target.value;
        setBook(book);
        setRequiredFieldsSelected(true);
    };

    const [fictionBook, setFictionBook] = useState('');

    const fictionBookType = [
        "Children's Book",
        'Short Story',
        'Novel'
    ];

    const handleFictionBookTypeChange = (event) => {
        const fictionBook = event.target.value;
        setFictionBook(fictionBook);
        setRequiredFieldsSelected(true);
    };

    const [nonFictionBook, setNonFictionBook] = useState('');

    const nonFictionBookType = [
        'Business',
        'Marketing',
        'Other'
    ];

    const handleNonFictionBookTypeChange = (event) => {
        const nonFictionBook = event.target.value;
        setNonFictionBook(nonFictionBook);
        setRequiredFieldsSelected(true);
    };

    const [script, setScript] = useState('');

    const scriptType = [
        'For YouTube',
        'For Reels/TikToks',
        'For a Short Film',
        'For a Feature Film',
        'For a TV-Series Episode'
    ];

    const handleScriptChange = (event) => {
        const script = event.target.value;
        setScript(script);
        setRequiredFieldsSelected(true);
    };

    const [socialMedia, setSocialMedia] = useState('');

    const socialMediaType = [
        'Facebook',
        'Instagram Caption',
        'Tweet',
        'LinkedIn'
    ];

    const handleSocialMediaChange = (event) => {
        const socialMedia = event.target.value;
        setSocialMedia(socialMedia);
        setRequiredFieldsSelected(true);
    };

    const [productDescription, setProductDescription] = useState('');

    const productDescriptionType = [
        'For E-Commerce Store',
        'For Etsy',
        'For eBay',
        'For Amazon'
    ];

    const handleProductDescriptionChange = (event) => {
        const productDescription = event.target.value;
        setProductDescription(productDescription);
        setRequiredFieldsSelected(true);
    };

    return (
        <Box sx={{ margin: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 4 }}>
                {props.title}
            </Typography>
            <Grid container spacing={2}>
                {/* Top Line - 3 columns */}
                <Grid item xs={12} md={4}>
                    <FormControl required fullWidth>
                        <InputLabel
                            id="job-type"
                        >
                            Job Type
                        </InputLabel>
                        <Select
                            labelId="job-type-select"
                            id="job-type-select"
                            value={job}
                            label="Job Type"
                            onChange={handleJobChange}
                        >
                            {jobType.map((job) => (
                                <MenuItem
                                    key={job}
                                    value={job}
                                >
                                    {job}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* If choosing an article */}
                    {job === 'Write an Article' && (
                        <FormControl required fullWidth>
                            <InputLabel id="article-type">Article Type</InputLabel>
                            <Select
                                labelId="article-type-select"
                                id="article-type-select"
                                value={article}
                                label="Article Type"
                                onChange={handleArticleChange}
                            >
                                {articleType.map((article) => (
                                    <MenuItem key={article} value={article}>
                                        {article}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing an essay */}
                    {job === 'Write an Essay' && (
                        <FormControl required fullWidth>
                            <InputLabel id="essay-type">Essay Type</InputLabel>
                            <Select
                                labelId="essay-type-select"
                                id="essay-type-select"
                                value={essay}
                                label="Essay Type"
                                onChange={handleEssayChange}
                            >
                                {essayType.map((essay) => (
                                    <MenuItem key={essay} value={essay}>
                                        {essay}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing a book */}
                    {job === 'Write a Book' && (
                        <FormControl required fullWidth>
                            <InputLabel id="book-type">Book Type</InputLabel>
                            <Select
                                labelId="book-type-select"
                                id="book-type-select"
                                value={book}
                                label="Book Type"
                                onChange={handleBookChange}
                            >
                                {bookType.map((book) => (
                                    <MenuItem key={book} value={book}>
                                        {book}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing a script */}
                    {job === 'Write a Script' && (
                        <FormControl required fullWidth>
                            <InputLabel id="script-type">Script Type</InputLabel>
                            <Select
                                labelId="script-type-select"
                                id="script-type-select"
                                value={script}
                                label="Script Type"
                                onChange={handleScriptChange}
                            >
                                {scriptType.map((script) => (
                                    <MenuItem key={script} value={script}>
                                        {script}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing social media posts */}
                    {job === 'Write Social Media Posts' && (
                        <FormControl required fullWidth>
                            <InputLabel id="social-media-type">Social Media Type</InputLabel>
                            <Select
                                labelId="social-media-type-select"
                                id="social-media-type-select"
                                value={socialMedia}
                                label="Social Media Type"
                                onChange={handleSocialMediaChange}
                            >
                                {socialMediaType.map((socialMedia) => (
                                    <MenuItem key={socialMedia} value={socialMedia}>
                                        {socialMedia}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing product description */}
                    {job === 'Write a Product Description' && (
                        <FormControl required fullWidth>
                            <InputLabel id="product-description-type">Product Description Type</InputLabel>
                            <Select
                                labelId="product-description-type-select"
                                id="product-description-type-select"
                                value={productDescription}
                                label="Product Description Type"
                                onChange={handleProductDescriptionChange}
                            >
                                {productDescriptionType.map((productDescription) => (
                                    <MenuItem key={productDescription} value={productDescription}>
                                        {productDescription}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* If choosing fiction book */}
                    {book === 'Fiction' && (
                        <FormControl required fullWidth>
                            <InputLabel id="fiction-book-type">Fiction Book Type</InputLabel>
                            <Select
                                labelId="fiction-book-type-select"
                                id="fiction-book-type-select"
                                value={fictionBook}
                                label="Fiction Book Type"
                                onChange={handleFictionBookTypeChange}
                            >
                                {fictionBookType.map((fictionBook) => (
                                    <MenuItem key={fictionBook} value={fictionBook}>
                                        {fictionBook}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* If choosing non-fiction book */}
                    {book === 'Non-Fiction' && (
                        <FormControl required fullWidth>
                            <InputLabel id="non-fiction-book-type">Non-Fiction Book Type</InputLabel>
                            <Select
                                labelId="non-fiction-book-type-select"
                                id="non-fiction-book-type-select"
                                value={nonFictionBook}
                                label="Non-Fiction Book Type"
                                onChange={handleNonFictionBookTypeChange}
                            >
                                {nonFictionBookType.map((nonFictionBook) => (
                                    <MenuItem key={nonFictionBook} value={nonFictionBook}>
                                        {nonFictionBook}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default StepOne;