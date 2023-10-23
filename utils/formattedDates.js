
export const dateFix = (a) => {
    const date = new Date(a);
    const dateToFix = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
    }).format(date)

    return dateToFix;
}

export const monthFix = (a) => {
    const date = new Date(a);
    const monthToFix = new Intl.DateTimeFormat('en-GB', {
        month:'short',
    }).format(date)

    return monthToFix
}

export const formattedDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))
}