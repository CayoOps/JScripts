const string = "/var/log/containers/grupodenome_heauauheahuea.log";
const regexp = /\D{20}(.*)_.*/;
const matches = string.matchAll(regexp);
    
for (const match of matches) {
  console.log(match[1]);
}