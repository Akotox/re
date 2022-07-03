class MyNavbar extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="images/logo.png" alt="">
                </span>
  
                <div class="text logo-text">
                    <span class="name">The Hub</span>
                    <span class="profession">best food</span>
                </div>
            </div>
            <i class='bx bx-chevron-right toggle'></i>
            
        </header>
  
        <div class="menu-bar">
            <div class="menu">
  
                <!-- <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li> -->
  
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="index.html">
                          <i class='bx bx-food-menu icon'></i>
                            <span class="text nav-text">Bookings</span>
                        </a>
                    </li>
  
                    <li class="nav-link">
                        <a href="the_gastronomic_performance.html">
                          <i class='bx bx-dish icon' ></i>
                            <span class="text nav-text">Gastronomic</span>
                        </a>
                    </li>
  
                    <li class="nav-link">
                        <a href="concept.html">
                          <i class='bx bx-drink icon'></i>
                            <span class="text nav-text">Concept</span>
                        </a>
                    </li>
  
                    <li class="nav-link">
                        <a href="chef.html">
                          <i class='bx bx-baguette icon' ></i>
                            
                            <span class="text nav-text">The Chef</span>
                        </a>
                    </li>
  
                    <li class="nav-link">
                        <a href="team.html">
                          <i class='bx bx-group icon' ></i>
                            <span class="text nav-text">Team</span>
                        </a>
                    </li>
  
                    <li class="nav-link">
                        <a href="contacts.html">
                          <i class='bx bx-message-rounded-dots icon' ></i>
                            <span class="text nav-text">Contact</span>
                        </a>
                    </li>
  
                </ul>
            </div>
  
        </div>
  
    </nav>
  
        `
    }
}
customElements.define('my-navbar', MyNavbar )