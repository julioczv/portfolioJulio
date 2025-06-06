"use client";

import React from "react";
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faCode, IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface FlipCardProps {
    frontBackground: string;
    backBackground: string;
    frontImage?: string;
    backTitle: string;
    backDescription: string;
    frontDescription: string;
    frontIcon: IconDefinition;
    skills: string[];
}

export function FlipCard({
                             frontBackground,
                             backBackground,
                             skills,
                             backTitle,
                             frontDescription,
                             frontIcon,
                             backDescription,
                         }: FlipCardProps) {
    const [flipped, setFlipped] = React.useState(false);

    const toggleFlipped = () => {
        console.log("toggleFlipped chamado. flipped era:", flipped);
        setFlipped((prev) => !prev);
    };

    return (
        <Box
            sx={{
                perspective: 1000,
                width: "350px",
                height: "400px",
            }}
        >
            <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    cursor: "pointer",
                    touchAction: "manipulation",
                }}
                onClick={toggleFlipped}
            >
                {/* === FACE FRONTAL === */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: 2,
                        backgroundColor: frontBackground,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '250px'}}>
                            <FontAwesomeIcon icon={frontIcon} size="4x"  color='var(--cor-primaria)'/>
                            <Typography variant='h6' fontWeight={600} >{frontDescription}</Typography>
                        </Box>
                </Box>

                {/* === FACE TRASEIRA === */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: 2,
                        backgroundColor: backBackground,
                        transform: "rotateY(180deg)",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: 'justify',
                        p: 3,
                        boxSizing: "border-box",
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, ml: 4 }}>
                        {backTitle}
                    </Typography>
                    <List disablePadding>
                    {skills.map((skillsText, idx) => (
                        <ListItem
                            key={idx}
                            sx={{
                                p: 0,
                                mb: idx !== skills.length - 1 ? 1.5 : 0,
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <FontAwesomeIcon icon={faCheck} color="#5A189A"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant='body2'>{skillsText}</Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                </Box>
            </motion.div>
        </Box>
    );
}
