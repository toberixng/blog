console.log('Before');
getUser(1, () => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })
});


getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));


console.log('After');

function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Reading a User from the database');
            resolve({ id: id, gitHubUsername: 'toberixng'});
        }, 2000);
    })      
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`getting ${username} repo from the github database`)
            resolve(['repo1', 'repos2', 'repo3'])
        }, 2000);
    });  
}

function getCommits (repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API....');
        resolve(['commits']);
        }, 2000);
    });
}