import React from 'react'

const NavigationDots = ({ active }) => {
    const menus = ['home', 'about', 'work', 'skills', 'contact'];

    return (
        <div className='app__navigation'>
            {menus.map((menu, index) => {
                return (
                    // eslint-disable-next-line 
                    <a
                        href={`#${menu}`}
                        key={menu + index}
                        className='app__navigation-dot'
                        style={active === menu ? { backgroundColor: '#313BAC' } : {}}
                    />
                )
            })}
        </div>
    )
}

export default NavigationDots