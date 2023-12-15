import React, { useState } from 'react';
import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
console.log(searchQuery)
console.log(error)
    const handleSearch = async () => {
        // Placeholder for search results
        const data = [];
        if (data.length === 0) {
            setError('No results found.');
        } else {
            setSearchResults(data);
            setError(null);
        }
    };

    return (
        <Box>
            <TextField
                id="outlined-basic"
                label=""
                placeholder="Buscar Microemprendimientos"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }}
                sx={{
                    display:'flex',
                    width: '100%',
                    height: 56,
                    position: 'relative',
                    top: 80,
                    padding: '0px 16px',
                    zIndex: 1,
                    flexShrink: 0,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white'
                        }
                    },
                    '& .MuiInputBase-input::placeholder': {
                        typography: 'label',
                        color:'black',
                        opacity: 1
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            {error && <Typography color="error">{error}</Typography>}
            {searchResults.map((result, index) => (
                <div key={index}>
                    {/* Render your search result here */}
                </div>
            ))}
        </Box>
    );
}

export default SearchBar;
