import profileReducer, {addPostAC, deletePostAC, ProfilePageType} from "./profile-reducer";

let state: ProfilePageType;

beforeEach(() => {
    state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post!", likesCount: 25}
        ],
        profile: null,
        status: ""
    };
})

it('new post should be added', () => {
    let action = addPostAC('New text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it("message of new post should be correct", () => {
    let action = addPostAC('New text')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe("New text")
})

it('after deletion, the array of messages should become smaller', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

it("after deletion, the array of messages shouldn't become smaller if id is incorrect", () => {
    let action = deletePostAC(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})