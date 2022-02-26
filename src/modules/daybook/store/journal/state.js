export default () => ({
    isLoading: true,
    entries: [
        {
            id: '1',//new Date().getTime(),
            date: new Date().toDateString(),
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            picture: null,
        },
        {
            id: '2',//new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            picture: null,
        },
        {
            id: '3',//new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            picture: null,
        }
    ]
});