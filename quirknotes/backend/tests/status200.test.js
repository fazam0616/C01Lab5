test("1+2=3, empty array is empty", () => {
  expect(1 + 2).toBe(3);
  expect([].length).toBe(0);
});

const SERVER_URL = "http://localhost:4000";

test("/postNote - Post a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const postNoteBody = await postNoteRes.json();

  expect(postNoteRes.status).toBe(200);
  expect(postNoteBody.response).toBe("Note added succesfully.");
});

test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
  const getAllNotes = await fetch(`${SERVER_URL}/getAllNotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  expect(getAllNotes.status).toBe(200);
});

test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
  const getAllNotes = await fetch(`${SERVER_URL}/getAllNotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  expect(getAllNotes.status).toBe(200);
});

test("/deleteNote - Delete a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);

  const id = await postNoteRes.json();
  // console.log(`${SERVER_URL}/deleteNote/${(id.insertedId)}`)
  const deleteNote = await fetch(`${SERVER_URL}/deleteNote/${id.insertedId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  expect(deleteNote.status).toBe(200);
});

test("/patchNote - Patch with content and title", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);

  const id = await postNoteRes.json();
  const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${id.insertedId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title+"!",
      content: content+"!",
    }),
  });
  expect(patchNoteRes.status).toBe(200);
});

test("/patchNote - Patch with just title", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);

  const id = await postNoteRes.json();
  const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${id.insertedId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title+"!"
    }),
  });
  expect(patchNoteRes.status).toBe(200);
});

test("/patchNote - Patch with just content", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);

  const id = await postNoteRes.json();
  const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${id.insertedId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content+"!"
    }),
  });
  expect(patchNoteRes.status).toBe(200);
});

test("/deleteAllNotes - Delete one note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);
  // console.log(`${SERVER_URL}/deleteNote/${(id.insertedId)}`)
  const deleteNote = await fetch(`${SERVER_URL}/deleteAllNotes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  expect(deleteNote.status).toBe(200);
});

test("/deleteAllNotes - Delete three notes", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);
  // console.log(`${SERVER_URL}/deleteNote/${(id.insertedId)}`)
  const deleteNote = await fetch(`${SERVER_URL}/deleteAllNotes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  expect(deleteNote.status).toBe(200);
});

test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  expect(postNoteRes.status).toBe(200);
  const id = await postNoteRes.json();

  // console.log(`${SERVER_URL}/updateNoteColor/${id.insertedId}`)
  const patchNoteColor = await fetch(`${SERVER_URL}/updateNoteColor/${id.insertedId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color:"#FF0000"
    })
  })
  expect(patchNoteColor.status).toBe(200);
});