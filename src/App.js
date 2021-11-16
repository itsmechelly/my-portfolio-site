import './App.css';

function App() {
    return (
        <div className="App">
            <body id="page-top">

                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root"></div>

                {/* <!-- Navigation--> */}
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand js-scroll-trigger" href="#page-top">My Portfolio</a>
                        <button
                            class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                            type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                            aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#portfolio">Portfolio</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#about">About</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- Masthead--> */}
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        {/* <!-- Masthead Avatar Image--> */}
                        <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                        {/* <!-- Masthead Heading--> */}
                        <h1 class="masthead-heading text-uppercase mb-0">My Portfolio</h1>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/* <!-- Masthead Subheading--> */}
                        <p class="masthead-subheading font-weight-light mb-0">Software Developer - Full Stack Developer - Public
                            Speaker</p>
                    </div>
                </header>

                {/* <!-- Portfolio Section--> */}
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        {/* <!-- Portfolio Section Heading--> */}
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/* <!-- Portfolio Grid Items--> */}
                        <div class="row">
                            {/* <!-- Portfolio Item 1--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/couponsystem.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 2--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/comingsoon.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 3--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/comingsoon.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 4--> */}
                            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/comingsoon.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 5--> */}
                            <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/comingsoon.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 6--> */}
                            <div class="col-md-6 col-lg-4">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div
                                        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i
                                            class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/comingsoon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section--> */}
                <section class="page-section bg-primary text-white mb-0" id="about">
                    <div class="container">
                        {/* <!-- About Section Heading--> */}
                        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/* <!-- About Section Content--> */}
                        <div class="row">
                            <div class="col-lg-4 ml-auto">
                                <p class="lead">This portfolio page is under construction these days, the information will be
                                    updated here as soon as possible ...
                                    Thank you</p>
                            </div>
                            <div class="col-lg-4 mr-auto">
                                <p class="lead">This portfolio page is under construction these days, the information will be
                                    updated here as soon as possible ...
                                    Thank you</p>
                            </div>
                        </div>
                        {/* <!-- About Section Button--> */}
                        <div class="text-center mt-4">
                            <a class="btn btn-xl btn-outline-light" href="assets/resume/Chelly Izraelov - Resume.pdf"
                                download="Chelly Izraelov - Resume.pdf">
                                <i class="fas fa-download mr-2"></i>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </section>

                {/* <!-- Contact Section--> */}
                <section class="page-section" id="contact">
                    <div class="container">
                        {/* <!-- Contact Section Heading--> */}
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        {/* <!-- Contact Section Form--> */}
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                            <br />
                                            <a href="" onclick="return false;"
                                                style={{ paddingBottom: '40px', fontSize: '35px', textDecoration: 'none' }}>
                                                <i class="fas fa-phone-alt"></i> +972-54-7570024
                                            </a>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                            <br />
                                            <a href="" onclick="return false;"
                                                style={{ paddingBottom: '40px', fontSize: '35px', textDecoration: 'none' }}>
                                                <i class="fa fa-envelope" aria-hidden="true"></i> hlly.lov@gmail.com
                                            </a>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                            <br />
                                            <a href="https://www.linkedin.com/in/chelly-izraelov/" target="_blank"
                                                style={{ paddingBottom: '40px', fontSize: '35px', textDecoration: 'none' }}>
                                                <i class="fab fa-fw fa-linkedin-in"></i> Linkedin profile
                                            </a>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                            <br />
                                            <a href="https://github.com/itsmechelly/" target="_blank"
                                                style={{ paddingBottom: '40px', fontSize: '35px', textDecoration: 'none' }}>
                                                <i class="fab fa-github" aria-hidden="true"></i> Github Portfolio
                                            </a>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                            <br />
                                            <a href="assets/resume/Chelly Izraelov - Resume.pdf"
                                                download="Chelly Izraelov - Resume.pdf"
                                                style={{ paddingBottom: '40px', fontSize: '35px', textDecoration: 'none' }}>
                                                <i class="fas fa-file-download"></i> Download Resume
                                            </a>
                                            <br />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success"></div>
                                    <div class="form-group">
                                        <a class="btn btn-primary btn-xl" style={{ width: '100%' }} id="sendMessageButton" type="submit"
                                            href="assets/resume/curiosity.pdf" download="curiosity.pdf">
                                            Something to be proud of... CURIOUS...?
                                            <br />
                                            Click here!
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer--> */}
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Footer Location--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Location</h4>
                                <p class="lead mb-0">
                                    Givatayim, Israel
                                    <br />
                                    Open to relocation
                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">CONTACT ME</h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="assets/resume/Chelly Izraelov - Resume.pdf"
                                    download="Chelly Izraelov - Resume.pdf"><i class="fas fa-file-download"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-envelope"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/chelly-izraelov/"
                                    target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/itsmechelly/"
                                    target="_blank"><i class="fab fa-github"></i></a>
                            </div>
                            {/* <!-- Footer About Text--> */}
                            <div class="col-lg-4">
                                <h4 class="text-uppercase mb-4">Any last words?</h4>
                                <p class="lead mb-0">
                                    Looking for full-time job
                                    <br />
                                    Available immediately
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* <!-- Copyright Section--> */}
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright © Chelly Izraelov 2021</small></div>
                </div>
                {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
                <div class="scroll-to-top d-lg-none position-fixed">
                    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i
                        class="fa fa-chevron-up"></i></a>
                </div>

                {/* <!-- Portfolio Modals--> */}
                {/* <!-- Portfolio Modal 1--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal1Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal1Label">Coupon System</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <a href="https:best-coupon-system-ever.herokuapp.com" target="_blank">
                                                <img class="img-fluid rounded mb-5" src="assets/img/portfolio/couponsystem.png"
                                                    alt="coupon system image" />
                                            </a>
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">Link to the project will be activated soon, thanks for your patience.
                                                <br /><br /> This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you
                                                <h5>Client Side Technolegy:<br />SOON...</h5>
                                                <h5>Server Side Technolegy:<br />SOON...</h5>
                                                <br />
                                            </p>
                                            <a class="btn btn-primary" href="https:best-coupon-system-ever.herokuapp.com"
                                                target="_blank">
                                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                Browse Website
                                            </a>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 2--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal2Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal2Label">Coming Soon...</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/comingsoon.png" alt="" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Portfolio Modal 3--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal3Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal3Label">Coming Soon...</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/comingsoon.png" alt="" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 4--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal4Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal4Label">Coming Soon...</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/comingsoon.png" alt="" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 5--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal5Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal5Label">Coming Soon...</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/comingsoon.png" alt="" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 6--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog"
                    aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                                id="portfolioModal6Label">Coming Soon...</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/comingsoon.png" alt="" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-5">This portfolio page is under construction these days, the information
                                                will be updated here as soon as possible ... <br />Thank you</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

        </div>
    );
}

export default App;
