import { CrossIco } from "./icon";
import Require from "./required";

export default function Modal({ handelClose, open, stateForm,onSubmit }) {
    if (!open) {
        return null;
    }
    return <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h3>Basic Modal</h3>
                <button type="button" onClick={handelClose}><CrossIco /></button>
            </div>
            <div className="modal-body">
                <form className="form" onClick={onSubmit}>
                    <div className="form-group">
                        <label>Name: <Require /></label>
                        <input type='text' className="form-control" name='name' value={stateForm?.name} />
                    </div>
                    <div className="form-group">
                        <label>Email: <Require /></label>
                        <input type='email' className="form-control" name='email' value={stateForm?.email} />
                    </div>
                    <div className="form-group">
                        <label>Phone: <Require /></label>
                        <input type='text' className="form-control" name='phone' value={stateForm?.phone} />
                    </div>
                    <div className="form-group">
                        <label>Website: <Require /></label>
                        <input type='text' className="form-control" name='website' value={stateForm?.website} />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-border mr-1" onClick={handelClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Ok</button>
            </div>
        </div>
        <div className="modal-bg" onClick={handelClose}></div>
    </div>
} 