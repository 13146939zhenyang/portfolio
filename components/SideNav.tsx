'use client'
import React from 'react'
import { sideNavItems } from '@/utils/constants'
import { Tooltip } from 'antd'

const SideNav = () => {
    return (
        <div className='border-[1px] border-[#575757] bg-[#1f1f1f] rounded-[30px] flex flex-col py-[24px] gap-[20px] z-20 w-[55px]'>
            {sideNavItems.map((item, index) => (
                <Tooltip placement="left" title={item.title} key={item.id} className='z-50' color='#404042' destroyTooltipOnHide={true} overlayClassName='px-4 py-2 text-xs' arrow={false}>
                    <item.icon className="w-[18px] h-[18px] text-[#999999] mx-auto cursor-pointer hover:text-[#58EA8B] transition-all duration-150 ease-in-out" />
                </Tooltip>
            ))}
        </div>
    )
}

export default SideNav