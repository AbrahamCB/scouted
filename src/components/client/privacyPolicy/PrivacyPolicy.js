import Link from "next/link";
import Layout from "../layout";
import styles from './PrivacyPolicy.module.css';
const PrivacyPolicy = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.privacy__area}>
                        <div className=" mb-5">
                            <h1 className={styles.privacy__title}>PRIVACY POLICY</h1>

                        </div>
                        <p>We respect the confidentiality of your personal data and aim to protect them. Our privacy policy complies with European Regulation (EC) No 45/2001, as well as with Laws 2472/1997, 3471/2006 and 2819/2000, and Presidential Decrees 207/1998 and 79/2000 [or: with any applicable laws of the Territory] on the protection of personal data, as amended from time to time, as well as with any other applicable legislation.</p>
                        <p>We collect and keep with your consent and approval the personal data you provide us, including information such as your name, your e-mail address. You own all your information and we do not collect, use or process any other information about you unless you have given us permission, or you have been notified by us.</p>
                        <p>We receive data about you each time you use the computer, mobile phone or other device in order to access Scouted, such as the pages you visit, the IP address, location, type of browser. We may receive data from our advertising partners, customers or third parties in order to improve the quality of our services to you.</p>
                        <p>We receive data about you each time you use the computer, mobile phone or other device in order to access Scouted, such as the pages you visit, the IP address, location, type of browser. We may receive data from our advertising partners, customers or third parties in order to improve the quality of our services to you.</p>
                        <p>We respect the information we receive about you and use it to provide you our services, as well as provide the necessary services to the advertisers that purchase advertisements on Scouted and the developers of the applications, and websites you use.</p>
                        <p>We respect the information we receive about you and use it to provide you our services, as well as provide the necessary services to the advertisers that purchase advertisements on Scouted and the developers of the applications, and websites you use.</p>
                        <p>We may provide your information if required by law and if deemed necessary to prevent any illegal activity or violation of any applicable laws of the Territory.</p>
                        <p>We may provide your information if required by law and if deemed necessary to prevent any illegal activity or violation of any applicable laws of the Territory.</p>
                        <p>We give your information to the people and companies that help us provide the services we offer. In all of these cases our partners must agree to only use your information consistent with the agreement we enter into with them, as well as this <Link href="/privacy-policy"><a >privacy policy</a></Link>.</p>
                        <p>Any third parties, to whom we give your information in order to provide you our services, must agree with this <Link href="/privacy-policy"><a>privacy policy</a></Link>.</p>
                        <p>If the ownership of our business changes, we may transfer your information to the new owner so they can continue to operate the service. But they will still have to comply with the commitments we have made in this <Link href="/privacy-policy">
                            <a href="">privacy policy</a></Link>.</p>
                        <p>This privacy policy remains valid and in full force and effect in case of change of ownership of Scouted and subsequent transfer of your information to the new owner.</p>
                        <p>We reserve our right to change the terms of this privacy policy at any time, with prior notification and within the existing or potential legal framework.</p>
                        <br />
                        <h1 className={styles.privacy__title}>Cookies</h1>
                        <p>We use cookies only to gather the necessary information in order to provide to you our full services, in accordance with EU legislation on cookies, as in force and effect. You fully and unreservedly consent to such use by indicating your wish at a “cookie notice” page or pop-up window. You can always delete your cookies following the process described by your browser. Based on the cookies we collect we may create advertising campaigns through Facebook, Instagram, YouTube or Google to display ads based on the pages you have visited in our website.</p>
                        <br />
                        <h2 ><b>Facebook Pixel</b></h2>
                        <p>We use Facebook pixel in our website in order to capture aggregate demographics, track user behavior, collect anonymous information about who views our Facebook and Intagram ads and retarget people with advertising campaigns based on how users have interacted with our platform. Use of pixel is fully compliant with Facebook Data Usage Policy. All information gathered is anonymous and is used for statistical and marketing purposes. You can delete Facebook cookie stored in your browser by visiting your browser settings. </p>
                        <br />
                        <h2 ><b>Google Analytics & Adwords</b></h2>
                        <p>We use Google Analytics and Adwords cookie in order to anonymously track user behavior in our website, gather important statistical information about our platform’s performance and retarget people with advertising campaigns based on how users have interacted with our platform. All information gathered is anonymous. Specifically the Google Adwords cookie measures the performance of our advertising campaigns on Google and Google Display network. You can delete the Google Analytics and Adwords cookie by visiting your browser settings.</p>
                        <br />
                        <h2 className={styles.privacy__title}>DISCLAIMER</h2>
                        <p>While we make every effort to ensure that the content of this website is accurate, the website is provided &apos;as is&apos; and we make no representations or warranties in relation to the accuracy or completeness of the information provided.</p>
                        <p>Nothing on this website should be taken to constitute professional or legal advice or a formal recommendation and we exclude all representations and warranties relating to the content and use of this site. In no event will we be liable for any incidental, indirect, consequential or special damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of profit, loss of contracts, goodwill, data, information, income, anticipated savings or business relationships, whether or not advised of the possibility of such damage, arising out of or in connection with the use of this website or any linked websites.</p>
                        <p>We do not warrant that the servers that make this website available will be error, virus or bug free and you accept that it is your responsibility to make adequate provision for protection against such threats. We recommend scanning any files before downloading.</p>
                        <br />
                        <p>Effective as of 1st February, 2022.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;