# Deploying
1. tag the version `git tag <whatever, e.g. v0.2.2>`
1. push the tag `git push origin <whatever, e.g. v0.2.2>`
1. on the server, get to the main repo root e.g. `cd ~/MusicCPRFrontEndDev`
1. pull on server `git pull`
1. checkout a new worktree for the recently pushed/fetched/tagged version `git worktree add ../fe-dev-versions/v0.2.2 v0.2.2`
1. npm i #beware that probably we should not track package-lock.json nor yarn.lock since local and remote are different platforms and we depend on platform-specific tools /-:
1. create .env.local and .env.production with content like this (and look at what we're using already on server)
    - `SECRET=<RANDOM STRING>`
1. npm run build
<!-- 1. `npm run dev` -->
<!-- 
1. If you push to main, it will re-deploy to dev.tele.band
    * the continuous deploy setup was created following [the steps detailed here](https://itnext.io/deploy-next-js-apps-using-github-actions-6322261757bc)
        * if the dev site loads, but fails to permit login, possibly the server's `.env.local` was removed/doesn't exist
        * beware: it seems that sometimes some pushed commits do not trigger the action 🤷
 -->
1. `pm2 stop fe-dev`
1. change the symlink for live in fe-dev to the newly readied version
    * cd /home/ec2-user/fe-dev-versions
    * rm live
    * ln -s /home/ec2-user/fe-dev-versions/<v0.2.2> live
1. cd /home/ec2-user/fe-dev-versions/live
1. `pm2 start npm --name "fe-dev" -- start`
1. `pm2 save`

