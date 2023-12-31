export type MMovie={
    id:number;
    poster_path:string; 
    title:string;
    release_date:string;
    overview:string;
    genre_ids:number[];
    vote_average:number; 
    popularity:number;
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

export type MComment={
    id:number;
    docs:string;
}

export type showComment={
    id:number;
    show:string;
}