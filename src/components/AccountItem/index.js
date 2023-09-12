import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2732a6a62e6b4d36bc1cd955a9745d88~c5_300x300.webp?x-expires=1694077200&x-signature=mh2aytIV8HRRahIGjn%2B%2FSoPu1SU%3D"
                alt="kien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Hop Kien</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tranhopkien</span>
            </div>
        </div>
    );
}

export default AccountItem;
