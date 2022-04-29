# Planning Notes

## Backend
1. Create a new user, ask for username, password, etc.
2. Delete user
3. Edit username, password, etc.
4. Middleware to log standard interactions w/ site
5. New entry (date created, entry, rating)
6. Ranking based on ratings
7. Editing entry
8. Port stuff, help

## Database
Database:
1. Users (username, password, personal information)
2. Interactions (a04 logging)
3. Entries (rating, date, entry themselves, user)

## Outline
Basic pages we need:
1. Onboarding
2. Profile
3. New journal entry
4. Resources

Frontend/design/Figma: Karen & Maya
Link to our Figma: https://www.figma.com/file/fBScfXf3AmM5G797wMe8SW/My-digital-journal?node-id=0%3A1 

Register, update, see info elsewhere (?), delete account, interactions w front end logged in database

## Pages
Onboarding (web)
- No account: 
-   Button “create an account” → create account/profile page → log in → “create entry” page: 3-smiley face scale rating of how you feel & textbox for words → “finish entry”
-   Once user finishes entry, go to profile, where users can either edit their profile or make a new entry
-   Database needs to hold user information and resources that are presented to user after they finish entry
- Account already exists:
-   Button “login” → “create entry” button → sliding scale rating of how you feel & textbox for words → “finish entry”
-   Once finish entry, go to profile, where users can either edit their profile or make a new entry
-   Database needs to hold user information and resources that are presented to user after they finish entry

Profile:
- Account info
-   Edit account: change username and password form
-     Can either change username or password because primary ID is email
-   Delete account
- Resource access
-   List of all resources -> link to external pages of resources from CAPS, UNC, etc.
- Past entries
- Make new entry

Database to keep in mind:
- ID based on email
- Username
- Password
- 3 smiley-face review
- Entry listings

## Planning ahead
*if we have time*: Future features
- Gamify 
- Weekly resources depending on weekly ratings
