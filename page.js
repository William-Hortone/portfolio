const cursorSeeMore = document.querySelector('.cursor2');
const cursor =document.querySelector('.cursor');
const cursorCopy = document.querySelector('.cursor3');
// const lastCursor = document.querySelector('.cursor5');



const clickEmail = document.querySelectorAll('.email_click');



const contactEmail = document.getElementById('contact_email');

const imageContainer = document.querySelector('.home_image_container')



const emailLink = document.querySelectorAll('.email')


// const socialMediasLinks = document.querySelector('.social_medias_link');


const projectsName = document.querySelectorAll('.poject_name')
const secondProjectsName = document.querySelectorAll('.second_project_name')


const projectsBoxes = document.querySelectorAll('.project_box_image')
const secondProjectsBoxes = document.querySelectorAll('.second_project_box');

const buttonClose = document.querySelector('.close_button');

const ongletsHobbies = document.querySelectorAll('.hobbies_section_title');
const textHobbies = document.querySelectorAll('.hobbies_section_text_image_box');


const ongletsSkills = document.querySelectorAll('.skill_box');
const TextSkills = document.querySelectorAll('.skill_text');

const buttonOpenmenu = document.querySelector('.button_open_menu')
const buttonClosemenu = document.querySelector('.close_navbar_container')
const navbar = document.querySelector('.navbar_open-container');
const main = document.querySelector('.main');

let index = 0;
let second_index = 0;


console.log(contactEmail)


ongletsHobbies.forEach(onglethobbi =>{
    onglethobbi.addEventListener('click', ()=>{
        if(onglethobbi.classList.contains('second_active')){
            return;
        }
        else{
            onglethobbi.classList.add('second_active');
        }
        index = onglethobbi.getAttribute('data-hobbi');
        for(let i = 0; i<ongletsHobbies.length; i++ ){
            if(ongletsHobbies[i].getAttribute('data-hobbi') != index){
                ongletsHobbies[i].classList.remove('second_active')
            }
        }
        for(let j = 0 ; j<textHobbies.length; j++){
            if(textHobbies[j].getAttribute('data-hobbi')== index){
                textHobbies[j].classList.add('second_text_active');             
            }
            else{
                textHobbies[j].classList.remove('second_text_active')
            }
        }

    })
})
ongletsSkills.forEach(onglet =>{
    onglet.addEventListener('click', ()=>{
        if(onglet.classList.contains('active')){
            return;
        }
        else{
            onglet.classList.add('active');
        }
        index = onglet.getAttribute('data-skill');
        for(let i = 0; i <ongletsSkills.length; i++ ){
            if(ongletsSkills[i].getAttribute('data-skill') != index){
                ongletsSkills[i].classList.remove('active')
            }
        }
        for(let j = 0 ; j<TextSkills.length; j++){
            if(TextSkills[j].getAttribute('data-skill')== index){
                TextSkills[j].classList.add('text_active');             
            }
            else{
                TextSkills[j].classList.remove('text_active')
            }
        }

    })
})

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	scale: 1.5
});


// socialMediasLinks.forEach(socialLinks =>{
//     socialLinks.addEventListener('mouseenter', ()=>{
//         cursor.classList.add('cursor_hover');
//     })
//     socialLinks.addEventListener('mouseleave', ()=>{
//         cursor.classList.remove('cursor_hover');
//     } )
//     // window.addEventListener('mousedown', ()=>{
//     //     cursor.classList.add('cursor_down')
//     // })
//     // window.addEventListener('mouseup', ()=>{
//     //     cursor.classList.remove('cursor_down')
//     // })
// })
// secondProjectsName.addEventListener('mouseenter', ()=>{
   
//     cursorSeeMore.classList.add('cursor_hover')
// })
// secondProjectsName.addEventListener('mouseleave', ()=>{
   
//     cursorSeeMore.classList.remove('cursor_hover')
// })

// -----project-----
// secondEmail.addEventListener('mouseenter', ()=>{
//     window.addEventListener('mousemove', cursorPosition)
//     cursorCopy.classList.add('cursor3_hover');

//     secondEmail.addEventListener('mousedown', ()=>{
    
//         cursorCopy.classList.add('cursor3_down')
            
//     });
//     secondEmail.addEventListener('mousedup', ()=>{
    
//         cursorCopy.classList.remove('cursor3_down')
            
//     });
//     secondEmail.addEventListener('click', ()=>{
//         navigator.clipboard.writeText("willhortone@gmail.com");
//         cursorCopy.innerHTML = "<p>Copié!</p>";
//     })
// })
// secondEmail.addEventListener('mouseleave', ()=>{
//     window.addEventListener('mousemove', cursorPosition)
//     cursorCopy.classList.remove('cursor3_hover');
//     cursorCopy.classList.remove('cursor3_hover')
//     cursorCopy.innerHTML = "<p>Click <br> pour copier</p>";
//     cursorCopy.style.textAlign = "center";
// })

// window.addEventListener('mousemove', cursorPosition);
//     cursorCopy.classList.remove('cursor3_hover')
//     cursorCopy.innerHTML = "<p>Click <br> pour copier</p>";
//     cursorCopy.style.textAlign = "center";




secondProjectsName.forEach(projectTitle =>{
    projectTitle.addEventListener('mouseenter', ()=>{
        cursor.classList.add('cursor_hover');
    })
    projectTitle.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor_hover');
    } )
    window.addEventListener('mousedown', ()=>{
        cursor.classList.add('cursor_down')
    })
    window.addEventListener('mouseup', ()=>{
        cursor.classList.remove('cursor_down')
    })
})
secondProjectsBoxes.forEach(boxProject =>{
    boxProject.addEventListener('mouseenter', ()=>{
        cursor.classList.add('cursor_hover');
    })
    boxProject.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor_hover');
    } )
    window.addEventListener('mousedown', ()=>{
        cursor.classList.add('cursor_down')
    })
    window.addEventListener('mouseup', ()=>{
        cursor.classList.remove('cursor_down')
    })
})

emailLink.forEach(email =>{
    email.addEventListener('mouseenter', ()=>{

        cursorCopy.classList.add('cursor3_hover');

        window.addEventListener('mousedown', ()=>{
        cursorCopy.classList.add('cursor3_down')
    });
        window.addEventListener('mouseup', ()=>{
        cursorCopy.classList.remove('cursor3_down');
     });
    
    } )
    email.addEventListener('mouseleave', ()=>{
        window.addEventListener('mousemove', cursorPosition);
        cursorCopy.classList.remove('cursor3_hover')
        cursorCopy.innerHTML = "<p>Click <br> pour copier</p>";
        cursorCopy.style.textAlign = "center";
    } )
})

clickEmail.forEach(click =>{
    click.addEventListener('click', ()=>{
        navigator.clipboard.writeText("willhortone@gmail.com");
        cursorCopy.innerHTML = "<p>Copié!</p>";
    })
})


   




// -----------------------------








buttonOpenmenu.addEventListener('click', ()=>{
    navbar.classList.add("show_nav");
    main.classList.add("show_nav");
})

buttonClosemenu.addEventListener('click', ()=>{
    navbar.classList.remove("show_nav");
    main.classList.remove("show_nav");
})


function cursorPosition(e){
    cursor.style.left = e.pageX+ "px";
    cursor.style.top = e.pageY+"px";
    cursorSeeMore.style.top = e.pageY + "px";
    cursorSeeMore.style.left = e.pageX + "px";
    cursorCopy.style.top = e.pageY + "px";
    cursorCopy.style.left = e.pageX + "px";
    // lastCursor.style.top = e.pageY + "px";
    // lastCursor.style.left = e.pageX + "px";
};

window.addEventListener('mousemove', cursorPosition);
imageContainer.addEventListener('mouseenter', ()=>{
    cursor.classList.add('cursor_hover')
    window.addEventListener('mousedown', ()=>{
        cursor.classList.add('cursor_down')
    })
    window.addEventListener('mouseup', ()=>{
        cursor.classList.remove('cursor_down')
    })

} )
// --------------
imageContainer.addEventListener('mouseleave', ()=>{
    window.addEventListener('mousemove', cursorPosition);
    cursor.classList.remove('cursor_hover')
    
} )

projectsName.forEach(project =>{
    project.addEventListener('mouseenter', ()=>{

        cursorSeeMore.classList.add('cursor_hover')
    
        window.addEventListener('mousedown', ()=>{
            cursorSeeMore.classList.add('cursor_down')
        })
        window.addEventListener('mouseup', ()=>{
            cursorSeeMore.classList.remove('cursor_down')
        })
    
    } )
    project.addEventListener('mouseleave', ()=>{
        window.addEventListener('mousemove', cursorPosition);
    
        cursorSeeMore.classList.remove('cursor_hover')
       
    
    } )
})


projectsBoxes.forEach(projectBox =>{
    projectBox.addEventListener('mouseenter', ()=>{

        cursorSeeMore.classList.add('cursor_hover')
    
        window.addEventListener('mousedown', ()=>{
            cursorSeeMore.classList.add('cursor_down')
        })
        window.addEventListener('mouseup', ()=>{
            cursorSeeMore.classList.remove('cursor_down')
        })
    
    } )
    projectBox.addEventListener('mouseleave', ()=>{
        window.addEventListener('mousemove', cursorPosition);
    
        cursorSeeMore.classList.remove('cursor_hover')
    
    
    } )
})


// ===
// emailLink.forEach(email =>{
//     email.addEventListener('mouseenter', ()=>{

//         cursorCopy.classList.add('cursor3_hover');

//         window.addEventListener('mousedown', ()=>{
//         cursorCopy.classList.add('cursor3_down')
//     });
//         window.addEventListener('mouseup', ()=>{
//         cursorCopy.classList.remove('cursor3_down');
//      });
    
//     } )
//     email.addEventListener('mouseleave', ()=>{
//         window.addEventListener('mousemove', cursorPosition);
//         cursorCopy.classList.remove('cursor3_hover')
//         cursorCopy.innerHTML = "<p>Click <br> pour copier</p>";
//         cursorCopy.style.textAlign = "center";
//     } )
// })



// emailLink.addEventListener('mouseenter', ()=>{
//     cursorCopy.classList.add('cursor3_hover');
//     window.addEventListener('mousedown', ()=>{
//         cursorCopy.classList.add('cursor3_down')
//     });
//     window.addEventListener('mouseup', ()=>{
//         cursorCopy.classList.remove('cursor3_down');
//     });

// } )

// emailLink.addEventListener('mouseleave', ()=>{
//     window.addEventListener('mousemove', cursorPosition);
//     cursorCopy.classList.remove('cursor3_hover')
//     cursorCopy.innerHTML = "<p>Click <br> pour copier</p>";
//     cursorCopy.style.textAlign = "center";
// } )


// clickEmail.addEventListener('click', () =>{
//     navigator.clipboard.writeText("willhortone@gmail.com");
//     cursorCopy.innerHTML = "<p>Copié!</p>";
// })

// secondEmail.addEventListener('mouseenter', ()=>{
//     cursorCopy.classList.add('cursor3_hover');

//     secondEmail.addEventListener('mousedown', ()=>{
    
//         cursorCopy.classList.add('cursor3_down')
            
//     });
//     secondEmail.addEventListener('mousedup', ()=>{
    
//         cursorCopy.classList.remove('cursor3_down')
            
//     });
//     secondEmail.addEventListener('click', ()=>{
//         navigator.clipboard.writeText("willhortone@gmail.com");
//         cursorCopy.innerHTML = "<p>Copié!</p>";
//     })
// })
// secondEmail.addEventListener('mouseleave', ()=>{
//     cursorCopy.classList.remove('cursor3_hover');
// })



