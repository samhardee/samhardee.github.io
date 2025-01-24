# samhardee.github.io

This is my personal account, but I've never used it, so I will transfer it to be a school account.
My school email is sjhardee@my.waketech.edu
This repository will hold assignments.
Hello! My name is Samantha Hardee, but everyone calls me Sam. I am 20 years old and a December baby. My pronouns are she/her and I am an IT Service & Support major. I have grown up around computers, due to my grandpa having technology experience. 

```mermaid
flowchart TD
    A[Start Game] --> B[Generate Random Number]
    B --> C[Set Number of Attempts]
    C --> D[Ask User for a Guess]
    D --> E{Is Guess Correct?}
    E -- Yes --> F[User Wins!]
    F --> G[End Game]
    E -- No --> H{Is Guess Too High?}
    H -- Yes --> I[Display "Too High!"]
    H -- No --> J[Display "Too Low!"]
    I --> K[Decrease Attempt Counter]
    J --> K[Decrease Attempt Counter]
    K --> L{Attempts Left?}
    L -- Yes --> D
    L -- No --> M[User Loses!]
    M --> G
    G --> N[Play Again?]
    N -- Yes --> A
    N -- No --> O[End Game]
```
