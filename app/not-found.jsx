import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="title">404!</h1>
            <p className="message">
                The page you are looking for does not exist
            </p>
            <Link href="/" className="link">
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;