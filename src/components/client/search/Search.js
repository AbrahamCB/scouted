import { useRouter } from 'next/router';
import { useState } from 'react';
import CardRow from '../cardrow/CardRow';
import Layout from './../layout/index';
import styles from "./Search.module.css";
const Search = ({ jobs }) => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7");
    const router = useRouter();
    const { title, location } = router.query;

    return (
        <>
            <Layout>

                <section>
                    <div className={`${styles.toggle__container} container`}>
                        <div className="text-center mb-5">
                            {/* <h1 className={styles.tag_title}>#{tagSlug} on Scouted</h1> */}
                            {/* <p className={styles.tag_text}>Check out jobs tagged <span>{tagSlug}</span> here.</p> */}
                            <h1>Searching: <span className='bg-light rounded p-1'>{title || location}</span></h1>


                        </div>
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className='d-flex justify-content-center'>
                                    {/* {jobs.length === 0 && <ScaleLoader loading={loading} color={color} />} */}
                                </div>
                                {jobs.length > 0 ?
                                    jobs.map((job, i) => <CardRow key={i} job={job} />)
                                    :
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-4'>
                                            <div className='d-flex justify-content-center'>
                                                <svg style={{ width: '300px' }} viewBox="0 0 250 250" className="SVG-wlnxuy-0 cnIZnY">
                                                    <g fill="none" fillrule="evenodd">
                                                        <ellipse fillOpacity=".059" fill="#000" cx={123} cy={217} rx={60} ry={7} />
                                                        <g transform="translate(39.35 46.809)">
                                                            <rect fill="#B6E8D0" x={23} width="121.542" height="142.791" rx={5} />
                                                            <rect fill="#D9D9D9" fillrule="nonzero" x={23} width="121.542" height="142.791" rx={5} />
                                                            <ellipse fill="#414141" cx={70} cy="50.5" rx={13} ry="12.5" />
                                                            <circle fill="#727272" cx="105.5" cy="54.5" r="6.5" />
                                                            <path d="M108.915 71.474c-8.415-1.442-13.157 1.432-15.852 7.324" stroke="#727272" strokeWidth="3.5" strokelinecap="round" strokeLinejoin="round" />
                                                            <path d="M23 103.848h121.542v33.943a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5v-33.943z" fill="#FFF" fillrule="nonzero" />
                                                            <path d="M23 103.848h121.542v33.943a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5v-33.943z" fill="#FFF" fillrule="nonzero" />
                                                            <path d="M37.75 117.42h48.381M37.75 127.745h34.22" stroke="#D9D9D9" strokeWidth="3.75" strokelinecap="round" />
                                                            <path d="M23.011 5.624c0-5.258 2.814 37.524 8.441 128.346l106.758 8.82H28.01a5 5 0 0 1-5-5V5.623z" fill="#A6A6A6" fillrule="nonzero" opacity=".195" />
                                                            <g transform="rotate(-15 121.255 12.32)" fillrule="nonzero" stroke="#727272" strokeWidth={7}>
                                                                <ellipse fillOpacity=".5" fill="#FFF" cx="51.634" cy="33.327" rx="32.4" ry="32.586" />
                                                                <path d="M23.087 48.766L.155 62.043" fillOpacity=".376" fill="#D8D8D8" strokelinecap="round" />
                                                            </g>
                                                        </g>
                                                        <g opacity=".402" transform="translate(21 26)" stroke="#A6A6A6">
                                                            <path d="M202.63 24.163h4.475a.89.89 0 0 1 .895.884.89.89 0 0 1-.895.884h-4.475v4.512a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884v-4.512h-4.475a.89.89 0 0 1-.895-.884c0-.488.4-.884.895-.884h4.475V19.68c0-.488.4-.884.895-.884a.89.89 0 0 1 .895.884v4.483z" strokeWidth="1.178" fill="#A6A6A6" strokelinecap="round" />
                                                            <ellipse strokeWidth="2.356" opacity=".53" cx="166.904" cy="4.759" rx="3.759" ry="3.759" />
                                                            <ellipse strokeWidth="2.356" opacity=".401" cx="194.217" cy="67.667" rx="3.759" ry="3.759" />
                                                            <path d="M42.244 5.367h4.475a.89.89 0 0 1 .895.884.89.89 0 0 1-.895.883h-4.475v4.513a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884V7.134H35.98a.89.89 0 0 1-.895-.883c0-.488.401-.884.895-.884h4.475V.884c0-.488.401-.884.895-.884a.89.89 0 0 1 .895.884v4.483z" strokeWidth="1.178" fill="#A6A6A6" opacity=".574" strokelinecap="round" />
                                                            <path d="M13.425 74.287H17.9a.89.89 0 0 1 .895.883.89.89 0 0 1-.895.884h-4.475v4.513a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884v-4.513H7.16a.89.89 0 0 1-.895-.884c0-.488.4-.883.895-.883h4.475v-4.484c0-.488.4-.883.895-.883a.89.89 0 0 1 .895.883v4.484z" strokeWidth="1.178" fill="#A6A6A6" opacity=".289" strokelinecap="round" />
                                                            <ellipse strokeWidth="2.356" cx="3.759" cy="28.821" rx="3.759" ry="3.759" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                            <h1 className='text-center'>No results</h1>
                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Search;