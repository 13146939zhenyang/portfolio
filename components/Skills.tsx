'use client'
import React, { useState } from 'react'
import { LiaShapesSolid } from 'react-icons/lia'
import { skills } from '@/utils/constants'
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
const size = 100;
const gap = 20;

const Square = ({ active, setActive, colIndex, rowIndex, x, y, skill }: any) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const d = distance(
        { x: active.col, y: active.row },
        { x: colIndex, y: rowIndex }
    );
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <>
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                // background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
                width: size,
                height: size,
                top: rowIndex * (size + gap),
                left: colIndex * (size + gap),
                position: "absolute",
                borderRadius: "50%",
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0
            }}
            className='hidden w-[100px] h-[100px] border-[2px] border-[#999999] hover:border-[#58EA8B] hover:bg-[#1f1f1f] rounded-3xl sm:flex flex-col justify-center items-center gap-2 p-1 cursor-pointer transition-all duration-[0.3] ease-in-out text-[#999999] hover:text-white'
        >
            <skill.icon className='text-[#58EA8B] text-3xl' />
            <span className='text-sm text-center'>{skill.title}</span>
        </motion.div>
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                // width: size,
                // height: size,
                top: rowIndex * (size-37),
                left: colIndex * (size-37),
                position: "absolute",
                borderRadius: "50%",
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0
            }}
            className={`sm:hidden sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] border-none sm:border-[2px] border-[#999999] hover:border-[#58EA8B] hover:bg-[#1f1f1f] rounded-3xl flex flex-col justify-center items-center gap-2 p-1 cursor-pointer transition-all duration-[0.3] ease-in-out text-[#999999] hover:text-white`}
        >
            <skill.icon className='text-[#58EA8B] text-sm sm:text-3xl' />
            <span className='text-[10px] sm:text-sm text-center'>{skill.title}</span>
        </motion.div>
        </>
    );
};

const Skills = () => {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    return (
        <div
            className='text-white w-full pt-[70px] pl-4 pr-4 sm:pl-[40%] flex flex-col'
            id='skills'
        >
            <motion.div
                className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white hidden justify-center items-center gap-2 text-xs mb-[58px] sm:flex'
                initial={{ x: -300, opacity: 1, scale: 0 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
                exit={{ x: 300, opacity: 0, scale: 0.5 }}
                viewport={{ margin: '0px 0px' }}
            >
                <LiaShapesSolid className="mb-[2px] text-sm" />
                <span className='uppercase font-[250]'>Skills</span>
            </motion.div>
            <motion.div
                className='w-[100px] h-[30px] border-[1px] border-[#565656] rounded-full text-white sm:hidden justify-center items-center gap-2 text-xs mb-[38px] flex'
                initial={{ x: 30, opacity:0 }}
                whileInView={{ x: 0, opacity:1 }}
                transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
                viewport={{ margin: '0px 0px' }}
            >
                <LiaShapesSolid className="mb-[2px] text-sm" />
                <span className='uppercase font-[250]'>Skills</span>
            </motion.div>
            <div className='cursor-default'>
                <motion.h3
                    className='block text-2xl sm:text-5xl leading-none sm:leading-[60px] font-light mb-8'
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
                    viewport={{ margin: '-100px 0px' }}
                >
                    My<span className='text-[#58EA8B]'> TechStack</span>
                </motion.h3>
            </div>
            <motion.div
                animate={{ "--base-hue": 360 } as any}
                initial={{ "--base-hue": 0 } as any}
                transition={{ duration: 1, loop: Infinity, ease: "linear" }}
                className='w-full h-[700px] sm:h-[1300px] flex flex-row flex-wrap gap-0 sm:gap-5 max-w-[358px] sm:max-w-[800px]'
            >
                <motion.div
                    style={{
                        display: "flex",
                        position: "relative",
                        perspective: 500
                    }}
                >
                    {skills.map((row, rowIndex) =>
                        row.map((_item, colIndex) => (
                            <Square
                                x={x}
                                y={y}
                                active={active}
                                setActive={setActive}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                key={rowIndex + colIndex}
                                skill={_item}
                            />
                        ))
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills