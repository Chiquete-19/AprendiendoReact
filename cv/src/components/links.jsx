import { Card } from './card'
export const Links = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}