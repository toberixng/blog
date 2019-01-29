console.log('Before');
// callback approach
// getUser(1, () => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });



// promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));


// Async and Await approach
async function displayCommits(){

    try {
        const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
    }   
    catch (err) {
        console.log('Errr', err.message)
    }
}

displayCommits()


console.log('After');

function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Reading a User from the database');
            // resolve({ id: id, gitHubUsername: 'toberixng'});
            reject(new Error('could not get the repos'));
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