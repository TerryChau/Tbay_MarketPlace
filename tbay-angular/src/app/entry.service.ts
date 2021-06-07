import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiurl = environment.apiurl;
  imageBaseURL= environment.imageBaseURL;
  user='John Smith';
  
  constructor(private http:HttpClient){ //on initialization, the following is assigned
  }
  
  /**
   * Get all entries/doc in DB
   * @returns JSON
   */
  listEntries(){
    return this.http.get(this.apiurl + 'api/list');
  }

  /**
   * Get all entries/doc in DB for a buyer
   * @returns JSON
   */
  listBuyerEntries(buyer: string){
    return this.http.get(this.apiurl + 'api/list_buyer/' + buyer);
  }
  
  /**
   * Get all entries/doc in DB excluding entries for author
   * @returns JSON
   */
  listExclude(author: string){
    return this.http.get(this.apiurl + 'api/list_exclude/' + author);
  }

  /**
   * Get all entries/doc in DB for author
   * @returns JSON
   */
  listOnly(author: string){
    return this.http.get(this.apiurl + 'api/list_only/' + author);
  }

  /**
   * Get all unsold entries/doc
   * @returns JSON
   */
   listUnsold(){
    return this.http.get(this.apiurl + 'api/list_unsold/');
  }

  getEntry(id: string){
    return this.http.get(this.apiurl + 'api/find/' + id);
  }

  createEntry(entry: FormData){
    return this.http.post(this.apiurl+'api/post/', entry);
  }
  
  updateEntry(id: string, entryData){
    return this.http.put(this.apiurl + 'api/put/' + id, entryData);
  }
  
  deleteEntry(id: string){
    return this.http.delete(this.apiurl + 'api/delete/' + id);
  }
}
