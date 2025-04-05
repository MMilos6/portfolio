'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import styles from './style.module.css'; // Import the CSS module

const portfolioData = [
    {
        "id": "1",
        "tag": "Photography",
        "title": "Minimalist Architecture",
        "img": "/images/work_images/6.jpg",
        "imgSmall": "/images/work_images/small/6.jpg",
        "bg": "#F4F4FF",
        "client": "Personal Project",
        "langages": "Lightroom, Photoshop",
        "link": "https://www.example.com",
        "linkText": "View Gallery",
        "description": "Captured stunning architectural photography with a focus on symmetry, minimalism, and natural lighting."
    },
    {
        "id": "2",
        "tag": "Development",
        "title": "E-commerce Platform",
        "img": "/images/work_images/4.jpg",
        "imgSmall": "/images/work_images/small/4.jpg",
        "bg": "#E9FAFF",
        "client": "Online Retailer",
        "langages": "React, Redux, Styled Components",
        "link": "https://www.example.com",
        "linkText": "Live Demo",
        "description": "Developed a scalable e-commerce platform with seamless checkout, optimized performance, and smooth animations for better UX."
    },
    {
        "id": "3",
        "tag": "Design",
        "title": "di Bolazo",
        "projectType": "Logo",
        "img": "/images/work_images/dibolazo.png",
        "imgSmall": "/images/work_images/dibolazo.png",
        "bg": "#FFF3FC",
        "client": "diBolazo Doberman kennel",
        "tools": "Illustrator",
        "link": "",
        "linkText": "/",
        "description": "Designed a SaaS dashboard with an intuitive user experience. Created interactive prototypes and conducted usability testing for better engagement."
    },
    {
        "id": "4",
        "tag": "Design",
        "title": "Corporate Website Redesign",
        "img": "/images/work_images/8.jpg",
        "imgSmall": "/images/work_images/small/8.jpg",
        "bg": "#FFF0F8",
        "client": "Enterprise Client",
        "langages": "Figma, Webflow",
        "link": "https://www.example.com",
        "linkText": "View Case Study",
        "description": "Redesigned a corporate website for better navigation and user engagement. Focused on clean aesthetics and usability improvements."
    },
    {
        "id": "5",
        "tag": "Design",
        "title": "Mobile App UI Kit",
        "img": "/images/work_images/5.jpg",
        "imgSmall": "/images/work_images/small/5.jpg",
        "bg": "#FFFAE9",
        "client": "Startup Project",
        "langages": "Figma, Sketch",
        "link": "https://www.example.com",
        "linkText": "View Case Study",
        "description": "Designed a mobile UI kit with reusable components, ensuring consistency and scalability across multiple screens and devices."
    },
    {
        "id": "6",
        "tag": "Photography",
        "title": "Street Portraits Collection",
        "img": "/images/work_images/9.jpg",
        "imgSmall": "/images/work_images/small/9.jpg",
        "bg": "#FCF4FF",
        "client": "Personal Project",
        "langages": "Lightroom, Photoshop",
        "link": "https://www.example.com",
        "linkText": "View Gallery",
        "description": "A collection of candid street portraits capturing raw emotions and daily life moments with an artistic touch."
    },
    {
        "id": "7",
        "tag": "Development",
        "title": "Modern Web App UI",
        "img": "/images/work_images/1.jpg",
        "imgSmall": "/images/work_images/small/1.jpg",
        "bg": "#FFF0F0",
        "client": "Tech Startup",
        "langages": "Next.js, TypeScript, Tailwind CSS",
        "link": "https://www.example.com",
        "linkText": "Live Demo",
        "description": "Developed a fully responsive web application using Next.js and Tailwind CSS. Optimized for performance and accessibility with a clean UI/UX approach."
    },
    {
        "id": "8",
        "tag": "Photography",
        "title": "Urban Nightlife Series",
        "img": "/images/work_images/3.jpg",
        "imgSmall": "/images/work_images/small/3.jpg",
        "bg": "#FFF0F0",
        "client": "Personal Project",
        "langages": "Lightroom, Photoshop",
        "link": "https://www.example.com",
        "linkText": "View Gallery",
        "description": "Captured vibrant cityscapes and nightlife photography, showcasing dynamic lighting and motion with high-quality post-processing techniques."
    },
    {
        "id": "9",
        "tag": "Development",
        "title": "Interactive Landing Page",
        "img": "/images/work_images/7.jpg",
        "imgSmall": "/images/work_images/small/7.jpg",
        "bg": "#FFF0F8",
        "client": "Marketing Agency",
        "langages": "GSAP, Three.js, CSS Animations",
        "link": "https://www.example.com",
        "linkText": "Live Demo",
        "description": "Built a visually engaging landing page with smooth animations and 3D interactions using GSAP and Three.js."
    }
];


interface PortfolioItem {
    id: string;
    tag: string;
    title: string;
    img: string;
    imgSmall: string;
    bg: string;
    client: string;
    langages?: string;
    tools?: string;
    link: string;
    linkText: string;
    description: string;
    projectType?: string;
}

export const Works = () => {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);

    const filteredItems = selectedTag === 'All' ? portfolioData : portfolioData.filter(item => item.tag === selectedTag);

    const handleItemClick = (item: PortfolioItem) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };
    
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) { // Only close if clicking on the backdrop
            closeModal();
        }
    };

    const uniqueTags = ['All', ...new Set(portfolioData.map(item => item.tag))];

    return (
        <div className={styles.container}>
            {/* Tag Filters */}
            <div className={styles.filterWrapper}>
                {uniqueTags.map((tag) => (
                    <button
                        key={tag}
                        className={`${styles.filterBtn} ${tag === selectedTag ? `${styles.filterBtnActive}` : ''}`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
    
            {/* Masonry Gallery */}
            <Masonry
                className={styles.masonryGrid}
                breakpointCols={{ 576: 2, 768: 3, 1024: 4 }}
                columnClassName={styles.masonryColumn}
            >
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className={styles.item}
                        style={{ backgroundColor: item.bg }}
                        onClick={() => handleItemClick(item)}
                    >
                        <Image
                            src={item.imgSmall}
                            alt={item.title}
                            width={400}
                            height={250}
                            className={styles.itemImg}
                        />
                        <div className={styles.itemInfo}>
                            <span className={styles.itemTag}>{item.tag}</span>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </Masonry>
    
            {/* Custom Modal */}
            {isModalOpen && currentItem && (
                <div className={styles.modalOverlay} onClick={handleBackdropClick}>
                    <div className={styles.modal} data-aos="fade-in" onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={closeModal}>
                            ×
                        </button>
                        <Image
                            src={currentItem.img}
                            alt={currentItem.title}
                            width={600}
                            height={400}
                            className={styles.modalImg}
                        />
                        <div className={styles.modalInfo}>
                            <h2>{currentItem.title}</h2>
                            <p>{currentItem.description}</p>
                            <p><strong>Client:</strong> {currentItem.client}</p>
                            <p><strong>Technologies:</strong> {currentItem.langages}</p>
                            {currentItem.link && (
                                <a href={currentItem.link} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                                    {currentItem.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};