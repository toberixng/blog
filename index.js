console.log('Before');
getUser(1, (user) => {
    // console.log('User', user);
    
    getRepositories(user.gitHubUsername, (repos) =>{
        console.log('Repos', repos)
    });
});
console.log('After');

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a User from the database');
        callback({ id: id, gitHubUsername: 'toberixng'});
    }, 2000);    
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log(`getting ${username} repo from the github database`)
        callback(['repo1', 'repos2', 'repo3'])
    }, 2000);
}