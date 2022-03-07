import { faPenNib,faFilePowerpoint,faComputerMouse,faLaptopCode,faFileWord,faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterMain from '../../Shared/Footer/FooterMain';
import NavMain from '../../Shared/Navbar/NavMain/NavMain';
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <NavMain></NavMain>
            <div className='courseContainer' style={{margin:"110px 0 50px 0"}}>
           <div>
           <h1 className="course-title">Our Courses</h1>{" "}
            <div className="services">
            
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
				<FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faFileWord} />
					<h4 className='h4C'>Mircosoft Office Application</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
                <FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faPenNib} />					<h4 className='h4C'>Graphic Design</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
                
				<FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faComputerMouse} />
                <h4 className='h4C'>Web Design</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
                <FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faLaptopCode} />					<h4 className='h4C'>Web Development</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
                <FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faFilePowerpoint} />					<h4 className='h4C'>Presentation Hero</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
                <FontAwesomeIcon className="fas fa-laptop-code fa-3x mb-4" style={{color:'white'}} icon={faPhotoFilm} />					<h4 className='h4C'>Creating Documentary</h4>
					<p className='pC'>Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque</p>
					<a className="readmore" href="#"><span className='spanC'>Read More</span></a>
				</div>
			</div>
			
		</div>
	</div>
</div>
           </div>
            </div>
            <FooterMain></FooterMain>
        </div>
    );
};

export default Courses;