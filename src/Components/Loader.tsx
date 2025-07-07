import { HashLoader } from "react-spinners";

const styles = {
    margin: "7rem auto",
};
function Loader() {

    return (
        <div className="sweet-loading loader">
            <HashLoader
                color='#07c8ef'
                cssOverride={styles}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1.3}
            />
        </div>
    );
}

export default Loader;