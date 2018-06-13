function create(element) {
        return document.createElement(element);
    }

function appendImg(name, content, sty) {
        name.setAttribute('class', sty);
        name.src=content;
    }

function appendTxt(name, content, sty) {
        if(!content) {
                return name.innerText==null;
            }
        name.setAttribute('class', sty);
        name.innerText=content;
    }

function appendLink(name, content, sty) {
        if(!content) {
                return name.innerText==null;
            }
        name.setAttribute('class', sty);
        name.setAttribute('href', content);
        name.innerText=content;
    }

function add(container, element) {
        return container.appendChild(element);
    }

function fun() {
        getUserInfo(document.getElementById('#users').value)
            .then(user =>{
                    createPage(user);
                })
    }

function apiRequest(url){
        return fetch(url)
                .then(response =>{
                    if(response.status>=200 && response.status<400){
                            return response.json()
                            }
                    else{
                            alert('Error: '+response.status)
                        }
                })
    }

function getUserInfo(login) {
        const url = 'https://api.github.com/users/' + login;
        return apiRequest(url);
    }

function createPage(user) {
        let root = document.getElementById('root');
        let block = document.createDocumentFragment();
        root.innerText='';
        let avatar = create('img');
        let name = create('p');
        let login = create('p');
        let bio =create('p');
        let company =create('p');
        let location =create('p');
        let email =create('p');
        let blog =create('a');

        appendImg(avatar, user.avatar_url, 'avatar_sty');
        appendTxt(name, user.name, "name_sty");
        appendTxt(login, user.login, 'login_sty');
        appendTxt(bio, user.bio, 'bio_sty');
        appendTxt(company, user.company, 'company_sty');
        appendTxt(location, user.location, 'location_sty');
        appendTxt(email, user.email, 'email_sty');
        appendLink(blog, user.blog, 'blog_sty');

        add(block,avatar);
        add(block,name);
        add(block,login);
        add(block,bio);
        add(block,company);
        add(block,location);
        add(block,email);
        add(block,blog);
        add(root, block)
    }