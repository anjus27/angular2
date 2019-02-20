<form method="post" action="{{route('books.store')}}">
    @csrf
    <label>Title</label>
    <input type="text" name="title"/><br>
    <labe>Body</labe>
    <input type="text" name="body"/><br>
        <button type="submit">add</button>
    
</form>


