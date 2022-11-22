import classNames from 'classnames/bind';
import styles from './Price.module.scss';

const cx = classNames.bind(styles);

function Price({ large, normal, medium, className, children }) {
    const classes = cx('price', { [className]: className, large, normal, medium });
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    const formatter = new Intl.NumberFormat('vi-VN', config);
    return <span className={classes}>{formatter.format(children)}</span>;
}

export default Price;
