import React from 'react'
import classNames from 'classnames'

export interface SwiperItemProps extends React.HTMLAttributes<HTMLDivElement> {
    itemId: string
}

export default class SwiperItem extends React.Component<SwiperItemProps, Record<string, unknown>> {
    render () {
        const { className, style, itemId, children, ...restProps } = this.props
        const cls = classNames('swiper-slide', className)
        return (
        <div
            className={cls}
            style={style}
            item-id={itemId}
            {...restProps}
        >
            {children}
        </div>
        )
    }
}
