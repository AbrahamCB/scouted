

const Content = ({ children }) => {
    return (
        <>
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                {/*begin::Post*/}
                <div className="post" id="kt_post">
                    {children}
                </div>
                {/*end::Post*/}
            </div>
        </>
    );
};

export default Content;