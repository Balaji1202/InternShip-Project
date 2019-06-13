
// load main content on window load
  $('window').ready(function(){
    $("#content").load("maincontent.html");
  });

// sticky oncroll  for header
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  var sidebar = document.getElementById("wrapper");
  function myFunction() {
      if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      sidebar.classList.add("sidebar-sticky");
    } else {
      header.classList.remove("sticky");
      sidebar.classList.remove("sidebar-sticky");
    }
  };

// Sidebar functionality

    // var submenuElement;
    // sidebar submenu display on hover
    sidebarFunction.onmouseover = function(event)
    {
      let submenu = event.target.closest('.row').id;
      submenu += '-submenu';
      let submenuElement = document.getElementById(submenu);
      submenuElement.classList.remove('submenu-hide');
      submenuElement.classList.add('submenu-display');

      submenuElement.onmouseover = function()
      {
        submenuElement.classList.remove('submenu-hide');
        submenuElement.classList.add('submenu-display');
      }

      submenuElement.onmouseout = function()
      {
        submenuElement.classList.add('submenu-hide');
        submenuElement.classList.remove('submenu-display');
      }
    };
    

    // sidebar submenu hide on mouse out
    sidebarFunction.onmouseout = function(event)
    {
      let submenu = event.target.closest('.row').id;
      submenu += '-submenu';
      let submenuElement = document.getElementById(submenu);
      submenuElement.classList.add('submenu-hide');
      submenuElement.classList.remove('submenu-display');

      submenuElement.onmouseover = function()
      {
        submenuElement.classList.remove('submenu-hide');
        submenuElement.classList.add('submenu-display');
      }

      submenuElement.onmouseout = function()
      {
        submenuElement.classList.add('submenu-hide');
        submenuElement.classList.remove('submenu-display');
      }
    };

    // x(elem)= {
    //   elem.classList.remove('submenu-hide');
    //     elem.classList.add('submenu-display');
    // }

    // showing active menu in the sidebar
      sidebarFunction.onclick = function(event)
      {
        let x = document.getElementById('sidebarFunction').querySelectorAll(".row");
        for(let a of x)
        {
          a.classList.remove('active');
        }
        event.target.closest('.row').classList.add('active');
        
        let file = event.target.closest('.row').id;
        file +='.html';
        $("#content").load(file);

      };
    