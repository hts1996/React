export type MMovie={
    id:number;
    poster_path:string; 
    title:string;
    release_date:string;
    overview:string;
    genre_ids:number[];
    vote_average:string; 
    popularity:string;
}



export type DMovie={
    id:number;
    poster_path:string; 
    title:string;
    release_date:string;
    overview:string;
    genres:Genres[];

}
export type Genres={
    id:number;
    name:string;
}