import Styles from './Activity.module.css';

const Activity = () => {
    return (
        <>
            <div className={Styles.activity__area}>
                <label>Add Note</label>
                <textarea className={Styles.text__area} name="" rows="7" id="" >

                </textarea>
                <div className="text-end">
                    <button className='btn btn-primary btn-sm'>Submit</button>
                </div>

                <div className={Styles.activity__box}>
                    <p className={Styles.date}>1/31/22</p>
                    <p className={Styles.title}>Candidate Status:</p>
                    <button className={Styles.pass}>Pass</button>
                    <p><small>by Scouted</small></p>
                </div>

                <div className={Styles.activity__box}>
                    <p className={Styles.date}>1/31/22</p>
                    <p className={Styles.title}>Scouted Recommendation:</p>
                    <button className={Styles.spam}>Spam</button>
                    <p><small>by Scouted</small></p>
                </div>

                <div className={Styles.activity__box}>
                    <p className={Styles.date}>1/31/22</p>
                    <p className={Styles.title}>Candidate Status:</p>
                    <button className={Styles.waiting}>Awaiting action</button>
                    <p><small>by Scouted</small></p>
                </div>
            </div>
        </>
    );
};

export default Activity;