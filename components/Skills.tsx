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
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
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
            className='w-[100px] h-[100px] border-[2px] border-[#999999] hover:border-[#58EA8B] hover:bg-[#1f1f1f] rounded-3xl flex flex-col justify-center items-center gap-2 p-1 cursor-pointer transition-all duration-[0.3] ease-in-out text-[#999999] hover:text-white'
        >
            <skill.icon className='text-[#58EA8B] text-3xl' />
            <span className='text-sm text-center'>{skill.title}</span>
        </motion.div>
    );
};

const Skills = () => {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    return (
        <div className='w-full text-white pt-[70px]' id='skills'>
            <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
                <LiaShapesSolid className="mb-[2px] text-sm" />
                <span className='uppercase font-[250]'>Skills</span>
            </div>
            <div className='cursor-default'>
                <h3 className='text-5xl leading-[60px] font-light mb-8'>My<span className='text-[#58EA8B]'> TechStack</span></h3>
            </div>
            <motion.div
                animate={{ "--base-hue": 360 } as any}
                initial={{ "--base-hue": 0 } as any}
                transition={{ duration:1, loop: Infinity, ease: "linear" }}
                className='w-full h-[1300px] flex flex-row flex-wrap gap-5 max-w-[800px]'
            >
                <motion.div
                    style={{
                        display: "flex",
                        // width: (size + gap) * 4 - gap,
                        // height: (size + gap) * 4 - gap,
                        // top: "50%",
                        // left: "50%",
                        // transform: "translate(-50%, -50%)",
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
            <div className='w-full flex flex-row flex-wrap gap-5 max-w-[800px]'>
            </div>
        </div>
    )
}

export default Skills