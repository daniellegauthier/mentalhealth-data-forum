var defaultThreads = [
    {
        id: 1,
title: "institution 1",
date: Date.now(),
content: "Thread content from web scrapes",
comments: [
    {
        id: 2,
        date: Date.now(),
        content: "mental health data"
    },
    {
        id: 3,
        date: Date.now(),
        content: "mental health data"
    },
    {
        id: 4,
        date: Date.now(),
        content: "mental health data"
    },
    {
        id: 5,
        date: Date.now(),
        content: "mental health data"
    },
    {
        id: 6,
        date: Date.now(),
        content: "mental health data"
    },
    {
        id: 7,
        date: Date.now(),
        content: "mental health data"
    }]
    },
{ id: 8,
    title: "institution 2",
    date: Date.now(),
    content: "Thread content from web scrapes",
    comments: [
        {
            id: 9,
            date: Date.now(),
            content: "mental health data"
        },
        {
            id: 10,
            date: Date.now(),
            content: "mental health data"
        },
        {
            id: 11,
            date: Date.now(),
            content: "mental health data"
        },
        {
            id: 12,
            date: Date.now(),
            content: "mental health data"
        },
        {
            id: 13,
            date: Date.now(),
            content: "mental health data"
        },
        {
            id: 14,
            date: Date.now(),
            content: "mental health data"
        }
    ]
    }
    ]
var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
}else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));

}
